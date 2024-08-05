import styles from "./VideoList.module.css"
import Card from "../Card"


function VideoList({ videos, emptyHeading }) {

const count = videos.length
let heading = emptyHeading
if(count > 0) {
    const noun = count > 1 ? 'videos' : 'video'
    heading = `${count} ${noun}`
}


    return (
<>
<h2>  {heading} </h2>
<section className={styles.videos}>
{ videos.map((video) => <Card id={video.id}/>) }
</section>

    </>
    );

}

export default VideoList;