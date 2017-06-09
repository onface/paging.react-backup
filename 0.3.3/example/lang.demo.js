var React = require('react')
var Paging = require('paging.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            page: 1
        }
    },
    onChange: function (page) {
        this.setState({
            page: page
        })
    },
    render: function () {
        var self = this
        return (
            <Paging
                lang={
                    {
                        dataCount: function (data) {
                            return 'Total:' + data.dataCount
                        },
                        prev: 'Prev',
                        next: 'Next',
                        stats: {
                            unit: ' page'
                        }
                    }
                }
                page={self.state.page}
                dataCount={232}
                pageSize={10}
                onChange={self.onChange}
             />
        )
    }
})
module.exports = App
