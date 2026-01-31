import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EventCard } from '@/components/cards/EventCard';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { events, eventCategories, upcomingEvents } from '@/lib/data/events';

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'View upcoming events, academic dates, and important deadlines at Ann Sandell High School.',
};

// Group events by month
function groupEventsByMonth(events: typeof upcomingEvents) {
  const grouped: { [key: string]: typeof events } = {};

  events.forEach((event) => {
    const date = new Date(event.date);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(event);
  });

  return grouped;
}

export default function CalendarPage() {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const groupedEvents = groupEventsByMonth(sortedEvents);

  return (
    <>
      <HeroSection
        title="School Calendar"
        subtitle="Stay informed about upcoming events, important dates, and school activities."
        imageSrc="/images/calendar-hero.jpg"
        imageAlt="School event"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Calendar' }]} />
      </div>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-navy-100">
        <div className="container-site">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-navy-600 font-medium whitespace-nowrap">Filter:</span>
            <Badge variant="navy" className="cursor-pointer">All Events</Badge>
            {eventCategories.map((category) => (
              <Badge
                key={category.value}
                variant="default"
                className="cursor-pointer hover:bg-navy-200 transition-colors whitespace-nowrap"
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      <section className="section-padding bg-navy-900">
        <div className="container-site">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Don't miss these important upcoming dates."
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(0, 3).map((event) => (
              <Card key={event.id} className="bg-navy-800 border-navy-700">
                <EventCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  category={event.category}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Calendar View */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            title="All Events"
            subtitle="Complete listing of school events and important dates."
            align="left"
            accent={false}
          />

          <div className="max-w-4xl">
            {Object.entries(groupedEvents).map(([monthYear, monthEvents]) => (
              <div key={monthYear} className="mb-10">
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-4 pb-2 border-b border-navy-100">
                  {monthYear}
                </h3>
                <div className="space-y-4">
                  {monthEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      category={event.category}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Calendar */}
      <section className="section-padding bg-gold-500">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
            Never Miss an Event
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Download our academic calendar or subscribe to receive event notifications.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors">
              Download Calendar (PDF)
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold border-2 border-navy-900 hover:bg-navy-50 transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
