function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  console.log(hours);
  const isOpen = hours >= openHour && hours <= closeHour;
  // if () {
  //   alert('we are open');
  // } else {
  //   alert('Sorry wer are closed');
  // }
  return (
    <footer className="footer">
      <p>We welcome you....!</p>
    </footer>
  );
}

export default Footer;
