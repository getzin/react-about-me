// Playground.tsx

import PetsList from "./PetsList";
import SpreadExample from "./SpreadExample";
import EventsExample from "./EventsExample";
import FormEventsExample from "./FormEventsExample";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import Counter from "./Counter";
import FormExample from "./FormExample";
import FocusExample from "./FocusExample";
import FilterExample from "./FilterExample";

import { useRef } from "react";

import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Playground() {
  const topRef = useRef<HTMLElement>(null);

  function scrollToTop() {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main ref={topRef} className="min-h-screen bg-zinc-900">
      <div className="mx-auto max-w-6xl space-y-8 p-8">
        <header>
          <h1 className="mb-2 text-4xl font-bold text-white">
            🧪 React Playground
          </h1>
          <p className="text-zinc-400">Hier teste ich neue React-Konzepte.</p>
        </header>
        <PetsList />
        <SpreadExample />
        <EventsExample />
        <FormEventsExample />
        <UncontrolledInput />
        <ControlledInput />
        <ControlledInput />
        <ControlledInput />
        <Counter />
        <Counter />
        <Counter />
        <FormExample />
        <FocusExample />
        <FilterExample />
      </div>
      <ScrollToTopButton onClick={scrollToTop} />
    </main>
  );
}
