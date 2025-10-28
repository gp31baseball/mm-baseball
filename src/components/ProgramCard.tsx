export default function ProgramCard({ title }: { title: string }) {
  return (
    <div className="border-2 border-[#FDB827] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold text-[#0A2351]">{title}</h3>
      <p className="text-[#0A2351] mt-2">Professional training focused on fundamentals and results.</p>
    </div>
  );
}
