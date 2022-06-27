import React from 'react'
import { FacebookProvider, Like, LikeLayout, LikeAction, Share, ShareButton, EmbeddedPost, Login, Comments, Feed } from 'react-facebook';

function LikeAndShare() {
  console.log();

  const initFacebookSDK = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }

    let locale = 'vi_VN'
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v2.5'
      })
    }
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = `//connect.facebook.net/${locale}/all.js`;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
  }

  const componentDidMount = () => {
    initFacebookSDK();
  }

  componentDidMount()

  return (
    <>
      <div 
        class="fb-like" 
        data-href="https://www.facebook.com/permalink.php?story_fbid=112770024783126&id=112769438116518" 
        data-width="" 
        data-layout="button" 
        data-action="like" 
        data-size="small" 
        data-share="true">
      </div>
    </>
  )
}

export default LikeAndShare
