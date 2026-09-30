import { profile, profilepic, profileBorder, border, creuBrasil, lovegf, oldTec, game, music, cd, connected, website, argLiker, musical, brazil, kittys, miinormal, miihello } from "../assets/index"
import { Container, Divmain } from "../components"

function WhoIam() {
    return (
        <>
            <Divmain>
                <div>
                    <Container>
                        <div class="flex p-4 justify-center">
                            <div class="flex flex-wrap justify-center p-5 gap-5">
                                <div class="relative">
                                    <img src={border} class="absolute min-w-67 inset-0 -left-6 -top-6" />
                                    <img src={profile} class="w-55" />
                                </div>
                                <div class="lg:flex lg:flex-col xs:grid xs:overflow-scroll lg:overflow-hidden justify-end lg:w-2xl gap-1 xs:w-full max-w-full">
                                    <Container>
                                        <h1 class="text-3xl">Hello! I'm Pedro</h1>
                                    </Container>
                                    <Container>
                                        <p class="text-md xs:wrap-break-word pt-3">Hi there! I’m a gamer and designer at heart, a twenty-something guy studying to be a Full-Stackdeveloper. <br />I love playing rogue-likes and platformers, and while I do dabble in competitive games, I’m honestly terrible at them LOL. I’m also in a relationship with the most beautiful woman in the world ♡. I have a huge thing for Y2K aesthetics, Frutiger Aero, and the old internet. <br />That’s a short summary of who I am—enjoy the blog! :)</p>
                                    </Container>
                                </div>
                            </div>
                        </div>
                        <div class="text-center p-3">
                            <div class="lg:flex xs:grid xs:grid-cols-2 xs:justify-center lg:gap-0.5 xs:gap-1 ">
                                <img src={lovegf} />
                                <img src={oldTec} />
                                <img src={game} />
                                <img src={connected} />
                                <img src={argLiker} />
                                <img src={music} />
                                <img src={website} />
                                <img src={musical} />
                                <img src={brazil} />
                                <img src={kittys} />
                            </div>
                        </div>
                    </Container>
                </div >
                <div class="grid lg:grid-cols-3 xs:grid-cols-1 gap-2">
                    <Container>
                        <h1 class="text-xl">Things that inspire me</h1>
                        <div class="p-4">
                            <ul>
                                <li>My Family</li>
                                <li>My Girlfriend</li>
                                <li>Jaiden Animations</li>
                                <li>Viniccius13</li>
                                <li>Coelho Rosa</li>
                            </ul>
                        </div>
                    </Container>
                    <Container>
                        <h1 class="text-xl">Some Photos i Like</h1>
                        <div class="flex snap-x snap-mandatory gap-1 overflow-x-auto" dir="ltr">
                            <img src="/img-whoiam/mylovewithme.jpg" class=" object-cover rounded-lg shrink-0 snap-center h-120" />
                            <img src="/img-whoiam/catowo.jpg" class=" object-cover rounded-lg shrink-0 snap-center h-120" />
                            <img src="/img-whoiam/totadawitchika.jpeg" class=" object-cover rounded-lg shrink-0 snap-center h-120" />
                        </div>
                    </Container>
                    <Container>
                        <h1 class="text-xl">Things i Like</h1>

                    </Container>
                </div>
            </Divmain >
        </>
    )
}

export default WhoIam