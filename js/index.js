$(document).ready(function() {
  $("time.timeago").timeago();

    var tweetCompose = $('.tweet-compose');

    tweetCompose.click(function() {
      console.log('click')
        $(this).css('height', '5em');
        $('#tweet-controls').css('display', 'block');
    })

    var charCount = $('#char-count');
    var submitButton = $("#tweet-submit");
    var newTweetText = tweetCompose.val();
    tweetCompose.keydown(function() {
        tweetCompose.keyup(function() {
            newTweetText = tweetCompose.val();
            if (newTweetText.length <= 140) {
                charCount.text(140 - newTweetText.length)
                charCount.css('color', '#999')
                submitButton.css('disabled', 'enabled')
            } else {
                charCount.text(140 - newTweetText.length)
                charCount.css('color', 'red')
                submitButton.css('disabled', 'disabled')
            }
        })
    })
    submitButton.click(function(e) {
        if (newTweetText.length <= 140) {
            // console.log("button clicked");
            // console.log(e.target);
            var newTweet = $('.tweet:first-child').clone();
            $('.tweet-text', newTweet).text(newTweetText)
            $('.fullname', newTweet).text('Kurt McGallion')
            $('.username', newTweet).text('@kurtmcg')
            $('.num-retweets', newTweet).text('0')
            $('.num-favorites', newTweet).text('0')
            $('.avatar', newTweet).prop('src', "img/profilepic.jpg")
            $('.retweet img:first-child', newTweet).prop('src', "img/damenleeturks.jpg")
            $('.tweet-compose', newTweet).prop('placeholder', "Reply to @kurtmcg")
            var d = new Date();
            var n = d.toISOString();
            $('.timeago', newTweet).attr('datetime', n)
            $('.timeago').text(n)
            newTweet.prependTo('#stream')
            $('.tweet-compose', '#tweet-content').prop('placeholder', "Shenanigans....")
            $('.tweet-compose', '#tweet-content').val('');
            charCount.text(140)
            $(tweetCompose).css('height', '2.5em');
            $('#tweet-controls').css('display', 'none');
            $("time.timeago").timeago();
            // $('.content').hover(function(e){
            // //   console.log(e)
            // //   console.log(e.target)
            // //   $('.tweet-actions ul', this).slideDown();
            // // }, function(){
            // //   $('.tweet-actions ul', this).slideUp();
            // })
        }
    })

    $('#stream').on("mouseenter", ".content", function() {
        $(".tweet-actions ul", this).slideDown()
    });
    $('#stream').on("mouseleave", ".content", function() {
        $(".tweet-actions ul", this).slideUp();
    });
  // $('.content').hover(function(e){
  //   $('.tweet-actions ul', this).slideDown();
  // }, function(){
  //   $('.tweet-actions ul', this).slideUp();
  // })

    $('#stream').on('click', '.tweet .content', function(e) {
        var clicks = $(this).data('clicks');
        if (clicks) {

              // $(".users-interact, .retweets, .favorites, .time, .reply", this).css('display', 'none');
        } else {
            $(".users-interact, .retweets, .favorites", this).css('display', 'inline-block');
            $(".time", this).css('display', 'block');
            $(".reply", this).css('display', 'block');
        }
        $(this).data("clicks", !clicks);
    });

$('#stream').on('click','.tweet-actions li:nth-child(2)', function(e) {
  console.log('click')
  console.log(e)
  console.log(this)
  var num = $(this).parent().parent().parent().find('.num-retweets').text();
  num = parseInt(num);
  num+=1;
  $(this).parent().parent().parent().find('.num-retweets').text(num);
})
$('#stream').on('click','.tweet-actions li:nth-child(3)', function(e) {
  console.log('click')
  console.log(e)
  console.log(this)
  var num = $(this).parent().parent().parent().find('.num-favorites').text();
  num = parseInt(num);
  num+=1;
  $(this).parent().parent().parent().find('.num-favorites').text(num);
})
    // $('.content').click(function(e) {
    //   console.log(e);
    //     var clicks = $(this).data('clicks');
    //     if (clicks) {
    //         $(".users-interact, .retweets, .favorites", this).css('display', 'none');
    //         $(".time", this).css('display', 'none');
    //         $(".reply", this).css('display', 'none');
    //     } else {
    //         $(".users-interact, .retweets, .favorites", this).css('display', 'inline-block');
    //         $(".time", this).css('display', 'block');
    //         $(".reply", this).css('display', 'block');
    //     }
    //     $(this).data("clicks", !clicks);
    // });

})
