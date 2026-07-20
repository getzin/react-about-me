// Playground.tsx

import { useRef } from "react";

import ScrollToTopButton from "../components/ScrollToTopButton";

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

import ThemeContextExample from "./context/ThemeContextExample";
import UserContextExample from "./context/UserContextExample";

export default function Playground() {
  const topRef = useRef<HTMLElement>(null);

  const petsRef = useRef<HTMLElement>(null);
  const spreadRef = useRef<HTMLElement>(null);
  const eventsRef = useRef<HTMLElement>(null);
  const formEventsRef = useRef<HTMLElement>(null);
  const uncontrolledRef = useRef<HTMLElement>(null);
  const controlledRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const focusRef = useRef<HTMLElement>(null);
  const filterRef = useRef<HTMLElement>(null);

  function scrollToTop() {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleTableOfContentsClick(e: React.MouseEvent<HTMLUListElement>) {
    const target = e.target as HTMLElement;
    const section = target.dataset.section;
    if (!section) {
      return;
    }

    switch (section) {
      case "pets":
        petsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "spread":
        spreadRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "events":
        eventsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "form-events":
        formEventsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "uncontrolled":
        uncontrolledRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "controlled":
        controlledRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "counter":
        counterRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "form":
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "focus":
        focusRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "filter":
        filterRef.current?.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        console.warn("Unknown section:", target.dataset.section);
    }
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

        <nav className="mb-8 rounded-lg bg-zinc-800 p-4">
          <h2 className="mb-3 text-xl font-semibold text-white">
            Table of Contents
          </h2>

          <ul
            className="space-y-2 text-blue-400"
            onClick={handleTableOfContentsClick}
          >
            <li data-section="pets" className="cursor-pointer hover:underline">
              Pets List
            </li>

            <li
              data-section="spread"
              className="cursor-pointer hover:underline"
            >
              Spread Example
            </li>

            <li
              data-section="events"
              className="cursor-pointer hover:underline"
            >
              Events Example
            </li>

            <li
              data-section="form-events"
              className="cursor-pointer hover:underline"
            >
              Form Events Example
            </li>

            <li
              data-section="uncontrolled"
              className="cursor-pointer hover:underline"
            >
              Uncontrolled Input
            </li>

            <li
              data-section="controlled"
              className="cursor-pointer hover:underline"
            >
              Controlled Input
            </li>

            <li
              data-section="counter"
              className="cursor-pointer hover:underline"
            >
              Counter
            </li>

            <li data-section="form" className="cursor-pointer hover:underline">
              Form Example
            </li>

            <li data-section="focus" className="cursor-pointer hover:underline">
              Focus Example
            </li>

            <li
              data-section="filter"
              className="cursor-pointer hover:underline"
            >
              Filter Example
            </li>
          </ul>
        </nav>

        <section ref={petsRef}>
          <PetsList />
        </section>

        <section ref={spreadRef}>
          <SpreadExample />
        </section>

        <section ref={eventsRef}>
          <EventsExample />
        </section>

        <section ref={formEventsRef}>
          <FormEventsExample />
        </section>

        <section ref={uncontrolledRef}>
          <UncontrolledInput />
        </section>

        <section ref={controlledRef}>
          <ControlledInput />
          <ControlledInput />
          <ControlledInput />
        </section>

        <section ref={counterRef}>
          <Counter />
          <Counter />
          <Counter />
        </section>

        <section ref={formRef}>
          <FormExample />
        </section>

        <section ref={focusRef}>
          <FocusExample />
        </section>

        <section ref={filterRef}>
          <FilterExample />
        </section>

        <section>
          <ThemeContextExample />
        </section>

        <section>
          <UserContextExample />
        </section>
      </div>
      <ScrollToTopButton onClick={scrollToTop} />
    </main>
  );
}
