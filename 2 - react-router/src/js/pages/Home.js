import React from 'react';
import Quote from '../components/Quote';

export default class Home extends React.Component {
    render() {
        const Quotes = [
            {
                title: "Danilo Cecilia",
                description: "One of the most beautiful qualities of true friendship is to understand and to be understood."
            },
            {
                title: "Joseph Climber",
                description: "Beauty is when you can appreciate yourself. When you love yourself, that's when you're most beautiful."
            },
            {
                title: "Rubens Cecilia",
                description: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
            },
            {
                title: "Rubens Cecilia",
                description: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
            },
            {
                title: "Rubens Cecilia",
                description: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
            }
        ].map(({ title, description }, i) => <Quote key={i} title={title} description={description} />)
        // ].map((q, i) => {
        //     debugger;
        //     return <Quote key={i} title={q.title} description={q.description} />
        // })

        return (
            <div>
                {Quotes}
            </div>)
    }
}