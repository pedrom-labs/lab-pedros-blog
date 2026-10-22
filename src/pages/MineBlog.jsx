import { Container, Divmain } from "../components"
import minepost from "../posts/minepost.json"

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
                        <div class="grid p-4 gap-3">
                            {minepost.map((post, key) => (
                                <Container>
                                    <div class="grid justify-items-start">
                                        <h2 class="text-4xl font-snpro text-white">{post.title}</h2>
                                        <span class="text-[13px] align-text-top font-snpro text-white">{post.hour}</span>
                                    </div>
                                    {post.imgs1 &&
                                        <div class="flex gap-2 overflow-x-auto snap-x snap-mandatory p-4">
                                            <div class="shrink-0 snap-start">
                                                <img src={post.imgs1} class="rounded-2xl h-100" />
                                            </div>
                                            <div class="shrink-0 snap-start">
                                                <img src={post.imgs2} class="rounded-2xl h-100" />
                                            </div>
                                            <div class="shrink-0 snap-start">
                                                <img src={post.imgs3} class="rounded-2xl h-100" />
                                            </div>
                                        </div>
                                    }
                                    <div class="p-4">
                                        <img src={post.img} class="rounded-2xl" />
                                        <p>{post.content}</p>
                                    </div>
                                </Container>
                            ))}
                        </div>
                    </div>
                </Container>
            </Divmain>
        </>
    )
}

export default Mineblog