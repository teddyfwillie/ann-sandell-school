import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NewsCard } from '@/components/cards/NewsCard';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { news, newsCategories, featuredNews } from '@/lib/data/news';

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Stay updated with the latest news, announcements, and stories from Ann Sandell High School.',
};

export default function NewsPage() {
  const regularNews = news.filter((article) => !article.featured);

  return (
    <>
      <HeroSection
        title="News & Announcements"
        subtitle="Stay connected with the latest happenings at Ann Sandell High School."
        imageSrc="/images/news-hero.jpg"
        imageAlt="School news"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs items={[{ label: 'News' }]} />
      </div>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-site">
            <SectionHeader
              overline="Featured"
              title="Top Stories"
              align="left"
            />

            <div className="space-y-6">
              {featuredNews.map((article) => (
                <NewsCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  imageSrc={article.imageSrc}
                  date={article.date}
                  category={article.category}
                  slug={article.slug}
                  featured
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-6 bg-navy-50 border-y border-navy-100">
        <div className="container-site">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-navy-600 font-medium whitespace-nowrap">Filter by:</span>
            <Badge variant="navy" className="cursor-pointer">All</Badge>
            {newsCategories.map((category) => (
              <Badge
                key={category}
                variant="default"
                className="cursor-pointer hover:bg-navy-200 transition-colors whitespace-nowrap"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            title="All News"
            align="left"
            accent={false}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
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
    </>
  );
}
