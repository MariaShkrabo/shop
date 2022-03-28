import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Women',
      imageURL: 'https://marieclaire.ua/wp-content/uploads/2018/04/fhfdv-820x1024.jpg'
    },
    {
      id: 2,
      title: 'Men',
      imageURL: 'https://ladyline.me/wp-content/uploads/2021/05/modnaya-muzhskaya-odezhda-5.jpg'
    },
    {
      id: 3,
      title: 'Kids',
      imageURL: 'https://vip-divan.su/800/600/https/pix-feed.com/wp-content/uploads/2020/01/1-32.jpg'
    },
  ];

  return <Directory categories={categories}/>;
}

export default App;
