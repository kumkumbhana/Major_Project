import React from 'react'

import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding proframming in ECMAScript (javaScript/js) and its various implementations."
    },
    {
        id: 2,
        tagName: "python",
        tagDesc: "python is a multi-paradigm, dynamically typed, multipurpose programming language"
    },
    {
        id: 3,
        tagName: "jc#",
        tagDesc: "c# is a high lavel, statically typed, multi-paradigm programming language"
    },
    {
        id: 4,
        tagName: "java",
        tagDesc: "java is a high lavel object oriented programming language "
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is awidely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language"
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML is a markup language for creating web pages and other information to be displayed in a web browser"
    },{
        id: 7,
        tagName: "android",
        tagDesc: "android is a google's mobile operating system, used for programming or developing digital devices"
    },{
        id: 8,
        tagName: "css",
        tagDesc: "css is a cascading style sheet, used for describing the look and formating of HTML, XML document."
    },{
        id: 9,
        tagName: "React.js",
        tagDesc: "Reactjs is a javscript library for building user interface. it uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime thet users Google's V8 javascript engine and libur library "
    }

]

  return (
    <div className='home-container-1'>
      <LeftSideBar/>
      <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions. </p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.  </p>
        <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tags
