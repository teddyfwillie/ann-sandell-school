import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaffCard } from '@/components/cards/StaffCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { staff, departments } from '@/lib/data/staff';

export const metadata: Metadata = {
  title: 'Staff Directory',
  description: 'Meet the dedicated educators and staff at Ann Sandell High School who are committed to student success.',
};

export default function StaffPage() {
  const staffByDepartment = departments.map((dept) => ({
    department: dept,
    members: staff.filter((s) => s.department === dept),
  }));

  return (
    <>
      <HeroSection
        title="Our Staff"
        subtitle="Meet the dedicated professionals who make Ann Sandell High School a place of excellence."
        imageSrc="/images/staff-hero.jpg"
        imageAlt="Teachers and staff"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Staff' }]} />
      </div>

      {staffByDepartment.map(({ department, members }) => (
        <section key={department} className="section-padding bg-white even:bg-navy-50">
          <div className="container-site">
            <SectionHeader
              title={department}
              align="left"
              accent={false}
              className="mb-8"
            />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member) => (
                <StaffCard
                  key={member.id}
                  name={member.name}
                  title={member.title}
                  department={member.department}
                  imageSrc={member.imageSrc}
                  slug={member.slug}
                  email={member.email}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
