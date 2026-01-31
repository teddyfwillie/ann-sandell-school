import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { NewsCard } from '@/components/cards/NewsCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { news, getNewsBySlug } from '@/lib/data/news';

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedNews = news
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  const formattedDate = format(new Date(article.date), 'MMMM d, yyyy');

  return (
    <>
      <div className="bg-navy-900 pt-24 pb-8">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: 'News', href: '/news' },
              { label: article.title },
            ]}
            className="text-navy-300 mb-6"
          />

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          <Badge variant="gold" className="mb-4">{article.category}</Badge>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-navy-300">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {article.author}
            </span>
          </div>
        </div>
      </div>

      <article className="container-site py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
            <Image
              src={article.imageSrc}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy-900 prose-p:text-navy-700 prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share */}
          <div className="mt-10 pt-6 border-t border-navy-100 flex items-center justify-between">
            <div className="text-navy-600">
              Share this article
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" leftIcon={<Share2 className="h-4 w-4" />}>
                Share
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="section-padding bg-navy-50">
          <div className="container-site">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-8">
              Related News
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedNews.map((article) => (
                <NewsCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  imageSrc={article.imageSrc}
                  date={article.date}
                  category={article.category}
                  slug={article.slug}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
