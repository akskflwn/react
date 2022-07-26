import React from 'react'

const styles = {
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
};

function Avatar(props) {
    console.log(props.url);
  return (
    <>
    <img src={props.url} alt='avatar-image' style={styles.avatar} />
    </>
  )
}

export default Avatar