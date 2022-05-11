// method-> obj
// function-> gobal
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach((tag) => {
      console.log(self.title, tag);
    });
  },
};
video.showTags();
//new
function playVideo() {
  console.log(this);
}
playVideo.call({ name: "a" });
playVideo.apply({ name: "a" });
playVideo.bind({ name: "a" });
