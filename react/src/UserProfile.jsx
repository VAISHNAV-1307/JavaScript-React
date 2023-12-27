const UserProfile = (props) => {
    return (
        <div>
            <h1>{ props.name}</h1>
            <h1>{ props.age}</h1>
        <img src={`https://wallpapercave.com/dwp2x/wp2416702.jpg`} />
      </div>
    );
}

export default UserProfile;

