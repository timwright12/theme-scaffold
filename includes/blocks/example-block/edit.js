/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { editPropsShape } from './props-shape';

/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} props The block props
 * @return {Function} Render the edit screen
 */
const ExampleBockEdit = ({
	attributes: { customTitle: currentTitle },
	className,
	setAttributes,
}) => {
	return (
		<div className={`${className}`}>
			<RichText
				className="wp-block-example-block__title"
				tagName="h2"
				placeholder={__('Custom Title')}
				value={currentTitle}
				onChange={(customTitle) => setAttributes({ customTitle })}
			/>
		</div>
	);
};
// Set the propTypes
ExampleBockEdit.propTypes = editPropsShape;
export default ExampleBockEdit;