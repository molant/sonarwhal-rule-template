/**
 * @fileoverview sonarwhal-rule-description
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import { debug as d } from '@sonarwhal/sonar/dist/src/lib/utils/debug';
import { RuleContext } from '@sonarwhal/sonar/dist/src/lib/rule-context';
// If you need access to more types, go to node_modules/@sonarwhal/sonar/dist/src/lib/types
import { IScanEnd, IRule, IRuleBuilder } from '@sonarwhal/sonar/dist/src/lib/types';

const debug: debug.IDebugger = d(__filename);

// ------------------------------------------------------------------------------
// Public
// ------------------------------------------------------------------------------

const rule: IRuleBuilder = {
    create(context: RuleContext): IRule {
        const validate = async (event: IScanEnd) => {
            const { resource } = event;

            debug(`Validating rule sonarwhal-rule`);

            /* This is where all the magic happens. Any errors found should be
               reported using the `context` object. E.g.:
               await context.report(resource, null, 'Your error message was here');

               More information on how to develop a rule is available in:
               https://sonarwhal.com/docs/developer-guide/rules/index.html
            */

            if (Math.ceil(Math.random()) === 0) {
                await context.report(resource, null, 'Your error message here');
            }
        };

        /* This object tells `sonar` what events this rule wants to listen to.
           You can read more about what events you can subscribe in:
           https://sonarwhal.com/docs/developer-guide/connectors/events.html
        */
        return { 'scan::end': validate };
    },
    meta: {
        docs: {
            category: 'Custom',
            description: `sonarwhal-rule-description`
        },
        fixable: 'code',
        recommended: false,
        schema: [
            /* If you want to allow the user to configure your rule
                you should use a valid JSON schema. More info in:
                https://sonarwhal.com/docs/developer-guide/rules/index.html#themetaproperty
            */

        ],
        worksWithLocalFiles: true
    }
};

module.exports = rule;
