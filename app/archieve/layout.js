export default function ArchieveLayout({ archive, lattest}){
    return (
        <div>
            <h1>News Archieve</h1>
            <section id="archive-filter">
                {archive}
            </section>
            <section id="archive-latest">
                {lattest}
            </section>
        </div>
    )
}