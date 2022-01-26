
function Social() {
    const fb = "https://www.facebook.com/himanshu.sah.1800";
  return (
    <div className="social">
      <div className="fb"><a href={fb}><i class="fab fa-facebook"></i></a></div>
      <div className="tw"><a href="https://twitter.com/sahhimanshu41"><i class="fab fa-twitter"></i></a></div>
      <div className="in"><a href="https://www.linkedin.com/in/himanshu-sah-a98799165/"><i class="fab fa-linkedin-in"></i></a></div>
      <div className="insta"><a href="https://www.instagram.com/sah_himanshu7/"><i class="fab fa-instagram-square"></i></a></div>
      <div className="git"><a href="https://github.com/Sahhimanshu7"><i class="fab fa-github"></i></a></div>
      <div className="mail"><a href="mailto:himanshusah41@gmail.com"><i class="fas fa-envelope"></i></a></div>
    </div>
  );
}

export default Social;