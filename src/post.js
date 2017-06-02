class Post {

  constructor(image_url, comment) {
    this.image_url = image_url
    this.comment = comment
  }

  render() {
    return `<img src=${this.image_url} width="400"><br>${this.caption} <br>`
  }

}
