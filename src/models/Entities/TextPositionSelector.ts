/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { Selector } from './Selector';
import { SelectorType } from './SelectorType';

export interface TextPositionSelector extends Selector {
	start: number;
	end: number;
}

export interface TextPositionSelectorParams {
	start: number;
	end: number;
}

export function createTextPositionSelector(
	params: TextPositionSelectorParams
): TextPositionSelector {
	return {
		type: SelectorType.TextPositionSelector,
		...params,
	};
}
