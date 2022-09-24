export default function About() {
    return (
        <section className="mt-11 mb-11 flex justify-center items-center bg-[#1F2022] ml-4 mr-4 w-[75vw] rounded-3xl">
            <div className="p-4 w-[55vw]">
                <h1 className="text-center text-3xl">
                    about me
                </h1>
                <p className="p-4 text-left text-xl leading-8">
                    Jax enters a defensive stance for up to 2 seconds, dodging incoming attacks and taking 25% less damage from area of effect abilities. After 2 seconds or recasting, Jax deals 55 / 80 / 105 / 130 / 155 (+0.5 per bonus attack damage) physical damage and stuns nearby enemies for 1 second.
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Nilah envelops herself in mist for 2.25 seconds, during which she becomes Ghost.png ghosted, gains Movement speed icon.png bonus movement speed, reduces all incoming magic damage taken by 25%, and Counter Strike.png dodges all non-Turret icon.png turret basic attacks.
                    Samira spins her blade over 0.75 seconds, destroying hostile non-Turret icon.png turret Projectile.png projectiles within the area for the duration.
                    Samira slashes twice during Blade Whirl, each one dealing physical damage to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.
                    Samira cannot attack nor cast Flair Flair during Blade Whirl. Casting Inferno Trigger Inferno Trigger will end Blade Whirl early.
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Mr. and Mrs. Dursley, of number four, Privet Drive, were
                    proud to say that they were perfectly normal, thank
                    you very much. They were the last people you'd expect to be in-
                    volved in anything strange or mysterious, because they just didn't
                    hold with such nonsense.
                    Mr. Dursley was the director of a firm called Grunnings, which
                    made drills. He was a big, beefy man with hardly any neck, al-
                    though he did have a very large mustache. Mrs. Dursley was thin
                    and blonde and had nearly twice the usual amount of neck, which
                    came in very useful as she spent so much of her time craning over
                    garden fences, spying on the neighbors. Thee Dursleys had a small
                    son called Dudley and in their opinion there was no finer boy
                    anywhere.
                    Thee Dursleys had everything they wanted, but they also had a
                    secret, and their greatest fear was that somebody would discover it.
                </p>
                <a className="p-4 text-left text-xl leading-8" href="https://www.google.com">Learn more about me</a>
            </div>
            <img className="p-4 rounded-full mx-auto w-1/4 h-1/3" src="/grotesque.jpeg" />
        </section>
    )
}