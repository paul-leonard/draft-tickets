
import React from 'react';
import Link from 'next/link';

class ListOfSeries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disableButton: false
        }
    }

    render() {
        return (
            <>
                {this.props.seriesData.length ?
                    <ul>
                        {this.props.seriesData.map(series => (
                            <li key={series.id}>
                                <Link href="/series/[id].js" as={`/series/${series.id}`}>
                                    <a>{series.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    : <h2>Sadly, you currently are not a part of any series.</h2>}
            </>
        )
    }
}

export default ListOfSeries;