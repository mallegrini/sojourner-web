module.exports = class Event {
  constructor (data) {
    this.id = data.id
    this.date = data.date
    this.startTime = data.startTime
    this.duration = data.duration
    this.title = data.title
    this.subtitle = data.subtitle
    this.abstract = data.abstract
    this.description = data.description
    this.type = data.type
    this.track = data.track
    this.room = data.room
    this.persons = data.persons
    this.links = data.links
    this.language = data.language
    Object.freeze(this)
  }
}
