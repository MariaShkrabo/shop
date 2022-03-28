import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {title, imageURL} = category;
    return(
        <div className="category-container">
            <div className='background-image' style={{
              backgroundImage: `url(${imageURL})`
            }} />
            <div className="category-body-container">
              <h2 className="category-title">{title}</h2>
              <p className="category-subtitle">Shop now</p>
            </div>
          </div>
    )
}

export default CategoryItem;