import Reveal from './Reveal';

export default function Problem() {
  return (
    <section className="bg-cream-50 paper-texture">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              BEING A PASTOR IS FAR MORE THAN PREACHING.
            </h2>
            <div className="mx-auto my-8 gold-rule" />
            <p className="text-lg leading-relaxed text-ink-900/80">
              A pastor must teach, evangelize, support new converts, train
              workers, organize the church, oversee the various ministries,
              and face a wide range of responsibilities.
            </p>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-leather-700">
              But do they always have the resources needed for each of
              these missions&nbsp;?
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
