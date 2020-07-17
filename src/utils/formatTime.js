export const formatTime = (time) => {
  if (time == null){
    return null;
  }
  
  if (!Number(time)){
    return null;
  }
  
  if (time < 0){
    return null;
  }
  
  if(time) {
    let seconds = Math.floor(time%60);
    let minutes = Math.floor((time/60)%60);
    let hours = Math.floor(time/3600);
    
    seconds = ('00' + seconds).slice(-2);
    minutes = ('00' + minutes).slice(-2);
    hours = ('00' + hours).slice(-2);
    
    return hours + ':' + minutes + ':' + seconds;
  }
};