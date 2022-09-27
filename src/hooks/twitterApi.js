function orderTweets (onlyTweets, mediaAndTweets) {
  const tweetAndUser = []
  const tweetAndMediaAndUser = []
  
  //Ordena os Tweets que podem ou nao conter imagens, agrupando usuário e tweet
  onlyTweets.data.map(tweet => {
    onlyTweets.includes.users.map(user => {
      if(tweet.author_id === user.id){
        tweetAndUser.push({
          id: tweet.id,
          description: tweet.text,
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            avatar: user.profile_image_url
          }
        })
      }
    })
  })
  
  //Ordena os Tweets contem imagens, agrupando usuário e tweet e medias
  mediaAndTweets.data.map((tweet) => {
    let medias = []
    
    tweet.attachments.media_keys.map(key => {
  
      mediaAndTweets.includes.media.map(media => {
        if(key === media.media_key){
          medias.push({
            id: key,
            url: media.url
          })
        }
      })
    })

    mediaAndTweets.includes.users.map(user => {
      if(tweet.author_id === user.id){
        tweetAndMediaAndUser.push({
          id: tweet.id,
          description: tweet.text,
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            avatar: user.profile_image_url
          },
          medias
        })
      }
    })
  })
  
  return {tweetAndUser, tweetAndMediaAndUser}
}

export async function getTweets(hashtag) {
  const BEARER_TOKEN = "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX"
  const TWITTER_URL = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${hashtag}%20has:hashtags&expansions=author_id&user.fields=id,name,username,profile_image_url,url`;
  const TWITTER_URL_PHOTOS = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${hashtag}%20has:hashtags%20-is:retweet%20-is:quote%20has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=username,profile_image_url&media.fields=type,url`;

  const responseTweetsAndMedias = await fetch(TWITTER_URL_PHOTOS, {
    method: 'GET', 
    headers: {
      "Authorization": BEARER_TOKEN
    }
  })

  const responseOnlyTweets = await fetch(TWITTER_URL, {
    method: 'GET', 
    headers: {
      "Authorization": BEARER_TOKEN
    }
  })
  
  const tweetsAndMedias = await responseTweetsAndMedias.json()
  const onlyTweets = await responseOnlyTweets.json()

  //caso nao tenha retorno de nenhum tweet
  if(onlyTweets.meta.result_count === 0 ){
    throw new Error('404')
  }

  return orderTweets(onlyTweets, tweetsAndMedias)
}

