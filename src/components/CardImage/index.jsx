import React, {useState} from 'react';
import { ImageWrapper } from './styled'
import { TweetCard } from '../TweetCard'
import { CardWrapper } from '../TweetCard/styled';
export function CardImage ({ tweet}) {
  const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};
  return (
   
     
     <>
         <ImageWrapper onClick={toggleIsOpen}
           imgUrl={tweet.medias[0].url}
        >
             <p>Postado por:<span><a href={'https://twitter.com/' + tweet.user.username} target="_blank" rel="noreferrer">@{tweet.user.username}</a></span></p>
          </ImageWrapper>
     
        {isOpen ?
          <div onClick={toggleIsOpen}  style={{
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.7)',
            cursor: 'pointer',
            padding: '200px 0',
            
          }}>
              
               
                <TweetCard
                    key={tweet.id}
                    tweet={tweet} 
                />
              
          </div>
          : null}
          </>
     
   
     

    
  )
}
