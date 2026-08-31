import { oldTec, game, music, cd, connected, website, argLiker, musical, brazil, kittys, paws, steam, wii, lambda, neko98, resolution, github, kitty, miinormal, miihello, meinmii, myblog, banner } from '../assets';
import { Divmain, Container, Button } from "../components"
import Posts from "../posts/post.json"
import LastFM from "../components/Lastfm"

function Home() {

  const firstpost = Posts[0]

  return (
    <>
      <Divmain>
        <div class="grid lg:grid-cols-2 gap-3 content-baseline">
          <section class="grid gap-1 content-baseline left_div">
            <Container>
              <h1 class="text-2xl text-center">Welcome to my Blog!</h1>
              <p class="text-gray-200 text-md p-2 pt-0">i, this is my old internet blog, a little corner where I always try to make some posts or just stay. I'm not from the blogging era, but one day I stopped and thought, "Why can't I have my own blog?" Is it too old-fashioned for me? You bet it is, but I don't mind. I love that old internet aesthetic, so I've adopted it here :)</p>
            </Container>
            <div class="lg:flex p-2 gap-3 cake_div">
              <div class="p-2 xs:grid xs:justify-center">
                <div>
                  <Container>
                    <iframe class="bg-white border-4 rounded-xl border-green-200/30" width="314" height="321" scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=Cake&dob=1777655291&gender=f&element=Earth&pet=https%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fblack-white%2Fanim%2Fnormal%2Fpikachu-f.gif&map=https%3A%2F%2Fimages.stockcake.com%2Fpublic%2F9%2F7%2F9%2F97908976-dccf-4bdf-8f66-81f787b0c28e_medium%2Fenchanted-forest-path-stockcake.jpg&background=&tablecolor=%23529d32&textcolor=black" frameborder="0"></iframe>
                  </Container>
                </div>
              </div>
              <div class="grid content-baseline">
                <div class="grid gap-11">
                  <div class="grid gap-6">
                    <Container>
                      <h2 class="text-xl">This is the cake!</h2>
                      <p class="text-gray-200 text-md p-2 pt-">Cake is the mascot of my website! Remember to treat her very well; she always tells me everything that happens here when I'm not around. Be nice to her, pet her, and don't forget to feed her when you come here :)</p>
                    </Container>

                    <Container>
                      <div class="h-30">
                        <h2 class="text-2xl">Status Update</h2>
                        <p class="text-xs text-gray-300/60">Posted 08/31/2026</p>
                        <p class="text-md p-1">Just tired</p>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid lg:grid-cols-2 p-2 gap-3 momento_div">
              <Container>
                <h2 class="text-xl">Games I've been playing!</h2>
                <div class="flex p-4 gap-2 justify-center">
                  <div class="h-72 grid items-center content-center">
                    <img src="./games/tboi.png" class="w-40 h-60" />
                    <p class="text-md text-center">TBOI: Rebirth</p>
                  </div>
                </div>
              </Container>
              <Container>
                <h2 class="text-xl">Games I want to play!</h2>
                <div class="flex p-4 gap-2">
                  <div>
                    <img src="https://cdn2.steamgriddb.com/thumb/f519bcff8be73f7baa7123d387778ba0.jpg" class="w-69.5 h-60" />
                    <p class="text-md text-center">Hey you, Pikachu!</p>
                  </div>
                  <div>
                    <img src="https://cdn2.steamgriddb.com/thumb/f711cc70dbdab88f32389ec84e56a242.jpg" class="w-40 h-60" />
                    <p class="text-md text-center">The Legend of Zelda: Ocarina of Time</p>
                  </div>
                </div>
              </Container>
            </div>
            <div class="flex justify-center pb-2">
              <Container>
                <img src="https://count.getloli.com/@pianobug?name=pianobug&theme=booru-vp&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" alt=":pianobug" />
              </Container>
            </div>
            <div class="grid grid-cols-1 gap-3">
              <Container>
                <h2 class="text-xl">The last Post on blog!</h2>
                <div class="p-2">
                  {firstpost ? (
                    <div>
                      <Container>
                        <h3 class="text-lg p-0.5">{firstpost.title} <span class="text-[16px] text-gray-300 font-snpro">{firstpost.hour}</span></h3>
                        <h3 class="">{firstpost.content}</h3>
                      </Container>
                    </div>
                  ) : (
                    <div>
                      <h3 class="text-lg p-0.5">Something is wrong :(</h3>
                    </div>
                  )}
                </div>
              </Container>
            </div>
          </section>
          <section class="grid lg:grid-cols-2 gap-3 content-baseline right_div">
            <Container class="tags_div">
              <div class="lg:pb-10 xs:pb-0">
                <h2 class="text-xl text-center">Some tags</h2>
                <p class="text-md pt-2">Here are some tags that might represent me, since much of what I post on this blog is related to something from here!</p>
              </div>
              <div class="grid grid-cols-3 gap-1">
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
              <div class="grid grid-cols-4 justify-center gap-0.5 p-2 min-w-8 content-center">
                <a href="https://steamcommunity.com/id/pdrinme/"><img src={steam} /></a>
                <a href="https://github.com/pdrinme"><img src={github} /></a>
                <img src={resolution} />
                <img src={paws} />
                <img src={myblog} />
                <img src={lambda} />
                <img src={wii} />
                <img src={neko98} />
              </div>
            </Container>
            <Container>
              <h3 class="text-center  text-xl">Song Played Tracker</h3>
              <LastFM />
            </Container>
            <div class="chat_div and game_div">
              <div class="chat_div pb-2">
                <Container>
                  <h3 class="text-center text-xl text-shadow-2xs/60 text-shadow-black">Chat</h3>
                  <iframe src="https://www3.cbox.ws/box/?boxid=3554800&boxtag=VN9wkA" class="xs:h-50 lg:h-60" width="100%" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
                </Container>
              </div>
              <div class="grid gap-3">
                <Container>
                  <div class="rounded-2xl bg-[url(https://cdn2.steamgriddb.com/hero/47ce0875420b2dbacfc5535f94e68433.png)] border-4 border-gray-500/70">
                    <div class="rounded-xl bg-gray-300/80 backdrop-blur-2xl inset-shadow-sm inset-shadow-white/40 flex justify-center p-2">
                      <img src={meinmii} class="w-45" />
                    </div>
                    <div class="group flex justify-center transition overflow-hidden">
                      <img src={miinormal} class="w-80 block group-hover:hidden" />
                      <img src={miihello} class="w-80 hidden group-hover:block group-hover:scale-105" />
                    </div>
                  </div>
                </Container>
                <Container>
                  <iframe src="https://nvlk.dimden.dev/" class="w-50 h-50 rounded-2xl justify-self-center" name="neolink"></iframe>
                </Container>
              </div>
            </div>
            <div class="grid">
              <div class="flex flex-col gap-3">
                <div>
                  <Container class="cutepic_div">
                    <p class="text-center text-md text-shadow-2xs/60 text-shadow-black">Contact? <br /><span class="text-center text-xs text-shadow-2xs/60 text-shadow-black">(I dunno, maybe won't reply)</span></p>
                    <div class="grid gap-3 p-4 text-center">
                      <Button><a href="mailto:pedro.menino.carlos@gmail.com" class="flex justify-items-center gap-2.5 p-1.5 bg-linear-to-t to-green-800/60 from-blue-500/40 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:bg-green-800/60 text-white"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Email_Shiny_Icon.svg/330px-Email_Shiny_Icon.svg.png" class="h-10" /> Email</a></Button>
                      <Button><a href="https://www.instagram.com/pdrinme/" class="flex justify-items-center gap-2.5 p-1.5 bg-linear-to-t to-green-800/60 from-blue-500/40 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:bg-green-800/60 text-white"><img src="https://i.redd.it/n50b6goja95d1.png" class="h-10 rounded-xl" /> Instagram</a></Button>
                      <Button><a href="https://x.com/pdrinme" class="flex justify-items-center gap-2.5 p-1.5 bg-linear-to-t to-green-800/60 from-blue-500/40 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:bg-green-800/60 text-white"><img src="https://i.redd.it/a-collection-of-some-of-my-skeuomorphic-icons-v0-z11v3xc5guad1.png?width=1675&format=png&auto=webp&s=c7d796e88c6caf356734a3eb227962282e8203bd" class="h-10 rounded-xl" /> X (Formerly called Twitter)</a></Button>
                      <Button><a href="/404" class="relative group flex justify-items-center gap-2.5 p-1.5 bg-linear-to-t to-green-800/60 from-blue-500/40 rounded-xl shadow-xl/15 font-comicsans inset-shadow-sm inset-shadow-white/80 transition hover:scale-115 hover:shadow-xl/50 hover:bg-red-800/60 text-white"><img src="https://i.redd.it/7tjlv2zxisaf1.png" class="h-10 rounded-xl grayscale-0 group-hover:grayscale-100" /> Discord <span class="rotate-12 absolute top-3 right-0.5 border-2 border-red-900/40 hidden group-hover:block transition group-hover:bg-red-900 rounded-xl p-0.5">Out of stock</span></a></Button>
                    </div>
                  </Container>
                </div>

                <Container>
                  <h3 class="text-center text-xl text-shadow-2xs/60 text-shadow-black">MOMONGA</h3>
                  <p class="text-xs text-gray-300/60 text-center pb-2 hidden">(update from time to time)</p>
                  <img src="https://i.pinimg.com/736x/a8/91/21/a8912190c45ff6822c4d0120fbaf00b5.jpg" class="rounded-xl" />
                </Container>

                <div class="hidden">
                  <Container>
                    <h3 class="text-center text-xl text-shadow-2xs/60 text-shadow-black">My banner!</h3>
                    <p class="text-xs text-gray-300/60 text-center pb-2 hidden">(update from time to time)</p>
                    <img src={banner} class="rounded-xl" />
                  </Container>
                </div>

              </div>
            </div>
          </section >
        </div >
      </Divmain >
    </>
  )
}

export default Home