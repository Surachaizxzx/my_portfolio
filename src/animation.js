import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/section.css';
const Boostrap = require('./images/Boostrap.png')
const CSS = require('./images/CSS.png')
const dart = require('./images/dart.png')
const Git = require('./images/git.png')
const Java = require('./images/java.png')
const Node = require('./images/node.png')
const Express = require('./images/express.jpg')
const PHP = require('./images/php.png')
const Postman = require('./images/postman.png')
const Python = require('./images/python.png')
const SQL = require('./images/sql.png')

export default function Animation() {
    const list = [Boostrap, CSS, dart, Git, Java, Node, Express, PHP, Postman, Python, SQL];
    return (
        <div className='Animation_container'>
            <ul className='Animation_Items'>
                {['Boostrap', 'CSS', 'Dart', 'Git', 'Java', 'Node.js', 'Express.js', 'PHP', 'Postman', 'Python', 'SQL'].map((item, index) => (
                    <li
                        className='Animation_Item'
                        style={{ animationDelay: `${index * 1}s` }}
                        key={index}
                    >
                        <div className='Animation_inside'><div className='img_container'>
                            <img src={list[index]} alt={item} />
                        </div><div className='text_container'>{item}</div></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
