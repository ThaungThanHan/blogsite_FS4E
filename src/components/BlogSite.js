import './BlogSite.scss';
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard';

const BlogSite = () => {
    return(
        <div className="blogs">
            <BlogCard title="A night at the museum" category="History" author="Eric" image="museum" />
            <BlogCard title="A night at the museum" category="History" author="Eric" image="how"/>
            <BlogCard title="A night at the museum" category="History" author="Eric" image="travel"/>
            <BlogCard title="A night at the museum" category="History" author="Eric" image="images"/> 
        </div>
    )
}

export default BlogSite;