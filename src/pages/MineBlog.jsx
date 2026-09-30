import { Container, Divmain } from "../components"
import imgpost1 from "/public/img-minecraft/imgM-post1.png"

function Mineblog() {
    return (
        <>
            <Divmain>
                <Container>
                    <div class="p-3">
                        <h1 class="text-4xl font-snpro text-white text-center">My Eternal Minecraft World</h1>
                        <p>Lately I've been feeling a little sad about Minecraft because I could never stick with a world for very long. So I decided to follow a piece of advice I'd seen in countless videos and forum posts: just pick one version of the game and never move on from it. That's how my journey with Minecraft 1.2.5 began. Released in April 2012, it's one of the very few versions I actually experienced as it was coming out during my childhood. I had played earlier versions like 1.0 and 1.1, but 1.2.5 has always held a special place in my heart. So I decided that this would become the version for my eternal world. In this section of the site, I'll be sharing the things I build, discover, and accomplish throughout my adventure!</p>
                    </div>
                    <div class="grid gap-4 p-4">
                        <Container>
                            <div class="p-4">
                                <div class="grid justify-items-start">
                                    <h2 class="text-4xl font-snpro text-white">Bad News :(</h2>
                                    <span class="text-[13px] align-text-top font-snpro text-white">17:01 am 09/30/2026</span>
                                </div>
                                <div class="p-4">
                                    <p>Unfortunately, the mod I used to get my skin and cape in Minecraft 1.2.5 stopped working because my graphics card driver no longer supports the OpenGL used in such an old version of the game, and that ended up breaking the whole thing :( including my world.</p>
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div class="p-4">
                                <div class="grid justify-items-start">
                                    <h2 class="text-4xl font-snpro text-white">My eternal world!</h2>
                                    <span class="text-[13px] align-text-top font-snpro text-white">15:50 am 07/22/2026</span>
                                </div>
                                <div class="p-4">
                                    <img src={imgpost1} class="rounded-2xl" />
                                    <p>I started this world not long ago, but I'm already making significant progress. Here’s a screenshot to show how things are going and that I’m already fully geared up in iron; I also have a diamond pickaxe. I’m really happy to be creating something cool without a care in the world!</p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Container>
            </Divmain>
        </>
    )
}

export default Mineblog