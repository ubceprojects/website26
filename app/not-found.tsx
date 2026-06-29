import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[680px] -translate-x-1/2 animate-drift rounded-full bg-cloud/20 blur-[130px]" />
        <div className="absolute inset-0 grid-mask opacity-50" />
      </div>

      <Container className="text-center">
        <p className="display text-7xl text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl text-white sm:text-4xl">
          Lost in the ecosystem.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-mist">
          This page doesn&apos;t exist, but the launchpad is still right here.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Back home
          </Button>
          <Button href="/events" variant="ghost" size="lg">
            Browse events
          </Button>
        </div>
      </Container>
    </main>
  );
}
