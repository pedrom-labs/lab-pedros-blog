import { Divmain, Container } from '../components'
import gamesiplayed from '../json/games/gamesiplayed.json'
import gamesiplay from '../json/games/gamesiplay.json'
import gamesiwanttoplay from '../json/games/gamesiwanttoplay.json'
import wishlist from '../json/games/wishlist.json'

function Games() {

  return (
    <>
      <Divmain>
        <div>
          <Container>
            <div class="grid p-2 gap-2">
              <h2 class="text-xl">My Backlogged Games</h2>
              <div class="grid lg:grid-cols-3 xs:grid-cols-1 gap-3">
                <Container>
                  <h3>Last Game Reviewed</h3>
                  <div class="flex gap-3 p-2">
                    <a href="https://store.steampowered.com/app/1177980/Little_Kitty_Big_City/"><img src="https://cdn2.steamgriddb.com/thumb/06d0e1fc5ba14e70e2037a3963029caf.png" class="w-30 h-auto rounded-2xl hover:scale-105 transition" /></a>
                    <div>
                      <h4 class="text-lg">Little Kitty, Big City</h4>
                      <p>Plataform: <span class="text-sm font-bold">PC</span></p>
                      <p class="text-md">Year: <span class="text-sm font-bold">2024</span></p>
                      <p class="text-md">Review: <span class="text-sm font-bold">It’s a good game really fun where you can quickly get a handle on the main objectives, though the collectibles are trickier.</span></p>
                    </div>
                  </div>
                </Container>
                <Container>
                  <h3>Current Game</h3>
                  <div class="flex gap-3 p-2">
                    <a href="https://www.nintendo.com/pt-pt/Jogos/Wii/The-Legend-of-Zelda-Twilight-Princess-283542.html?srsltid=AU7gw4Xr3bALjo6He-78t8RFzSuHkqnk78AD-AIv1HeOQJCI6uMjftpv"><img src="https://cdn2.steamgriddb.com/thumb/36d6a670240681fbbf69cbba0c9065ce.jpg" class="w-30 h-auto rounded-2xl hover:scale-105 transition" /></a>
                    <div>
                      <h4 class="text-lg">Zelda: Twilight Princess</h4>
                      <p>Plataform: <span class="text-sm font-bold">Gamecube</span></p>
                      <p class="text-md">Year: <span class="text-sm font-bold">2006</span></p>
                      <p class="text-md ">Review so far: <span class="text-sm font-bold">The game is wonderful; it offers a great sense of discovery and active thinking, and you really feel like you are in the game world.</span></p>
                    </div>
                  </div>
                </Container>
                <Container>
                  <h3>Next Game to Play</h3>
                  <div class="flex gap-3 p-2">
                    <a href="https://www.nintendo.com/pt-pt/Jogos/Nintendo-GameCube/Pokemon-XD-Gale-of-Darkness-268588.html?srsltid=AU7gw4W9VjqsmwB3LyRJYf6R-wnddAVvEG0blHnUt_jDxr6bucOvo9Xk"><img src="https://cdn2.steamgriddb.com/thumb/7ffb495169d85f0505b894fa685a79f8.jpg" class="w-30 h-auto rounded-2xl hover:scale-105 transition" /></a>
                    <div>
                      <h4 class="text-lg">Pokémon XD: Gales of Darkness</h4>
                      <p>Plataform: <span class="text-sm font-bold">Gamecube</span></p>
                      <p class="text-md">Year: <span class="text-sm font-bold">2005</span></p>
                      <p class="text-md">Intuition: <span class="text-sm font-bold">It’s going to be a great game! It’s been on my list of games to beat for about four years now; I’ve played a bit of it already, and I really liked what I played.</span></p>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </div>
        <div class="grid lg:grid-cols-2 gap-3">
          <Container>
            <h2 class="text-xl">Games that I have already played</h2>
            <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
              {gamesiplayed.map((game) =>
                <div >
                  <div class="group relative">
                    <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                    <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                    <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                    <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                  </div>
                </div>
              )}
            </div>
          </Container>
          <Container>
            <h2 class="text-xl">Games I'm playing</h2>
            <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
              {gamesiplay.map((game) =>
                <div >
                  <div class="group relative">
                    <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                    <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                    <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                    <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                  </div>
                </div>
              )}
            </div>
          </Container>
          <Container>
            <h2 class="text-xl">Games i wanted to play</h2>
            <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
              {gamesiwanttoplay.map((game) =>
                <div >
                  <div class="group relative">
                    <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                    <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                    <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                    <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                  </div>
                </div>
              )}
            </div>
          </Container>
          <Container>
            <h2 class="text-xl">Wishlist</h2>
            <p class="text-sm">Steam Available</p>
            <div class="grid lg:grid-cols-3 xs:grid-cols-2 gap-3 h-125 overflow-y-auto overflow-x-hidden scroll-smooth p-5">
              {wishlist.map((game) =>
                <div >
                  <div class="group relative">
                    <img src={game.img} class="w-50 rounded-xl transition group-hover:scale-105 group-hover:rounded-2xl group-hover:blur-xs" />
                    <p class="transition hidden group-hover:block absolute top-3.5 text-lg text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.title}</p>
                    <span class="transition hidden group-hover:block absolute top-13 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.year}</span>
                    <span class="transition hidden group-hover:block absolute top-13 left-12 text-yellow-300 text-md text-clip rounded-2xl p-1 group-hover:bg-white/10 inset-shadow-2xs inset-shadow-white group-hover:backdrop-blur-3xl">{game.platform}</span>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>
      </Divmain>
    </>
  )
}

export default Games