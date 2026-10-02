import EmptyState from "../components/ui/EmptyState";

export default function NotFound() {
  return (
    <main className="bg-ivory px-5 py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <EmptyState title="404 Not Found" text="The page you are looking for is not part of this transformation story." action={{ href: "/", label: "Back Home" }} />
      </div>
    </main>
  );
}
