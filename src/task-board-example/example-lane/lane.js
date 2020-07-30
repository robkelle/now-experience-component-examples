import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../example-card';
import styles from './lane.scss';
import {dropBehavior} from '../behaviors/dragDropBehaviors';
import {CARD_DROPPED} from '../constants';
import view from './view';

createCustomElement('example-lane', {
	renderer: {type: snabbdom},
	view,
	properties: {
		laneId: {
			default: 0
		},
		title: {
			default: ''
		},
		cards: {
			default: []
		}
	},
	styles,
	behaviors: [{
		behavior: dropBehavior,
		options: {
			onDrop(card, {dispatch, properties: {laneId}}) {
				const nextCard = {...card, lane: laneId};
				dispatch(CARD_DROPPED, nextCard);
			}
		}
	}]
});
