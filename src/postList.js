class PostList {

  constructor() {
    this.array = []
  }

  render()
  { var full_list = this.array.map( post => `<img src=${this.image_url} width="400"><br>${this.caption} <br>` )
    $('#photo-form').html(full_list.join(""))
  }

  // render isn't working right, needed another few minutes to finish it up

  addComment(string) {
    this.array.push(new Post(image_url, text))
    this.render()
  }

  clear() { this.array = []; $('#photo-form').html("")}


}
