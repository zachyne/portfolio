export default function Intro({ line1, line2, line3 }) {
    return (
        <div className="px-5 pb-10">
            <h2>{line1}</h2>
            <h2 className="font-black text-3xl">{line2}</h2>
            <h2>{line3}</h2>
        </div>
    );
}
