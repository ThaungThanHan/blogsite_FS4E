import {Link} from 'react-router-dom';
import "./BlogSite.scss";
import Woman from '../assets/images/images.jpg';

const BlogCard = ({title,category,image,author,date}) => {
    return(
        <div>
                <div className="blogs--card">
                    <div className="blogs--card-images">
                        <img className="blogs--card-images-img" src={`/images/${image}.jpg`}/>
                    </div>
                    <div className="blogs--card-texts">
                        <p className="blogs--card-texts-title">{title}</p>
                        <div className="blogs--card-texts-secondary">
                            <p className="blogs--card-texts-secondary-category">Added to
                            <Link to="#" className="blogs--card-texts-secondary-category-link">
                            {category}</Link>
                            </p>
                            <p className="blogs--card-texts-secondary-date">{date}</p>
                        </div>
                        <div className="blogs--card-author">
                            <img className="blogs--card-author-img" src={Woman} />
                            <p className="blogs--card-author-name">BY {author}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BlogCard;