$(".hideShowToggle").click(toggleHideShow);
function toggleHideShow() {
  $(".hideShow").toggle();
  var $this = $(this);
		$this.toggleClass('toggleHideShow');
		if($this.hasClass('toggleHideShow')){
			$this.text('Read Less');
		} else {
			$this.text('Read More');
		}
}
