import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {

    render() {
        const { onItemsFilterChange } = this.props;

        function typeFilter(event) {
            onItemsFilterChange(event.target.value);
            document.getElementById('type').innerHTML=`${event.target.value}`;
            closeType();
        }
        function languageFilter(event) {
            onItemsFilterChange(event.target.value);
            document.getElementById('language').innerHTML=`${event.target.value}`;
            closeLanguage();
        }
        function closeType() {
            document.getElementById('type-options').removeAttribute('open');
        }
        function closeLanguage() {
            document.getElementById('language-options').removeAttribute('open'); 
        }
        return (
            <div className="ItemStatusFilter">

                <details className="btn-light details-reset details-overlay position-relative mr-2" id="type-options" open="">
                    <summary className="btn" aria-haspopup="menu" role="button">
                        <i>Type:</i>
                        <span id='type'>
                            All
                        </span>
                    </summary>

                    <details-menu class="SelectMenu right-md-0" role="menu">
                        <div className="SelectMenu-modal">
                            <header className="SelectMenu-header">
                                <span className="SelectMenu-title">Select type</span>
                                <button className="SelectMenu-closeButton" type="button" data-toggle-for="type-options" onClick={closeType}><i className="fa fa-times"></i></button>
                            </header>
                            <div className="SelectMenu-list">
                                <label className="SelectMenu-item">
                                    <input type="radio" name="type" id="type_" value="All" hidden="hidden" data-autosubmit="true" checked="checked" onChange={typeFilter} />

                                    <span className="text-normal" data-menu-button-text="">All</span>
                                </label>
                                <label className="SelectMenu-item">
                                    <input type="radio" name="type" id="type_public" value="Public" hidden="hidden" data-autosubmit="true" onChange={typeFilter} />

                                    <span className="text-normal" data-menu-button-text="">Public</span>
                                </label>
                                <label className="SelectMenu-item">
                                    <input type="radio" name="type" id="type_private" value="Private" hidden="hidden" data-autosubmit="true" onChange={typeFilter} />

                                    <span className="text-normal" data-menu-button-text="">Private</span>
                                </label>
                                <label className="SelectMenu-item">
                                    <input type="radio" name="type" id="type_source" value="Source" hidden="hidden" data-autosubmit="true" onChange={typeFilter} />

                                    <span className="text-normal" data-menu-button-text="">Sources</span>
                                </label>
                                <label className="SelectMenu-item">
                                    <input type="radio" name="type" id="type_fork" value="Fork" hidden="hidden" data-autosubmit="true" onChange={typeFilter} />

                                    <span className="text-normal" data-menu-button-text="">Forks</span>
                                </label>
                                <label className="SelectMenu-item">
                                    <input type="radio" name="type" id="type_archived" value="Archived" hidden="hidden" data-autosubmit="true" onChange={typeFilter} />

                                    <span className="text-normal" data-menu-button-text="">Archived</span>
                                </label>
                                <label className="SelectMenu-item">
                                    <input type="radio" name="type" id="type_mirror" value="Mirror" hidden="hidden" data-autosubmit="true" onChange={typeFilter} />

                                    <span className="text-normal" data-menu-button-text="">Mirrors</span>
                                </label>
                            </div>
                        </div>
                    </details-menu>
                </details>





                <details className="btn-light details-reset details-overlay position-relative flex-auto" id="language-options" open="">
                    <summary className="btn" aria-haspopup="menu" role="button">
                        <i>Language:</i>
                        <span id='language'>
                            All
                        </span>
                    </summary>

                    <details-menu class="SelectMenu right-md-0" role="menu">
                        <div className="SelectMenu-modal">
                            <header className="SelectMenu-header">
                                <span className="SelectMenu-title">Select language</span>
                                <button className="SelectMenu-closeButton" type="button" data-toggle-for="language-options" onClick={closeLanguage}><i className="fa fa-times"></i></button>
                            </header>
                            <div className="SelectMenu-list">
                                <label className="SelectMenu-item">
                                    <input type="radio" name="language" id="language_" value="All" hidden="hidden" data-autosubmit="true" checked="checked" onChange={languageFilter} />
                                    <span className="text-normal" data-menu-button-text="">All</span>
                                </label>
                                <label className="SelectMenu-item" >
                                    <input type="radio" name="language" id="language_javascript" value="JavaScript" hidden="hidden" data-autosubmit="true" onChange={languageFilter} />
                                    <span className="text-normal" data-menu-button-text="">JavaScript</span>
                                </label>
                                <label className="SelectMenu-item" >
                                    <input type="radio" name="language" id="language_css" value="CSS" hidden="hidden" data-autosubmit="true" onChange={languageFilter} />
                                    <span className="text-normal" data-menu-button-text="">CSS</span>
                                </label>
                                <label className="SelectMenu-item" >
                                    <input type="radio" name="language" id="language_html" value="HTML" hidden="hidden" data-autosubmit="true" onChange={languageFilter} />
                                    <span className="text-normal" data-menu-button-text="">HTML</span>
                                </label>
                            </div>
                        </div>
                    </details-menu>
                </details>
                <a href="https://github.com/new" className="text-center btn btn-outline-success ml-3"> <i className="fa fa-bookmark"></i> New </a>
            </div>
        );
    };
}


export default ItemStatusFilter;

