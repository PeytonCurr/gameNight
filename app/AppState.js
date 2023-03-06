import { Player } from "./Models/Player.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  players = [
    new Player(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18b03c38-e220-42b3-8eaf-cd2c96c3d417/d7v9nvb-e314bd86-032a-4469-9086-3ee569badf34.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4YjAzYzM4LWUyMjAtNDJiMy04ZWFmLWNkMmM5NmMzZDQxN1wvZDd2OW52Yi1lMzE0YmQ4Ni0wMzJhLTQ0NjktOTA4Ni0zZWU1NjliYWRmMzQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fJeIxlI-3rVwRSqy35smqFj0olJc8U91W9O1f5M6AEc`, `Peyton`, 0),
    new Player(`https://thumbs.gfycat.com/AssuredCoolKatydid-max-1mb.gif`, `Josephine`, 0)
  ]

  maxScore = 10
  minScore = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
