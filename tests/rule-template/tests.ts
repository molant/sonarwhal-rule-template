import { generateHTMLPage } from '@sonarwhal/sonar/dist/tests/helpers/misc';
import { getRuleName } from '@sonarwhal/sonar/dist/src/lib/utils/rule-helpers';
import { IRuleTest } from '@sonarwhal/sonar/dist/tests/helpers/rule-test-type';
import * as ruleRunner from '@sonarwhal/sonar/dist/tests/helpers/rule-runner';

const ruleName = getRuleName(__dirname);

/* You should test for cases where the rule passes and doesn't.
   More information about how `ruleRunner` can be configured is
   available in:
   https://sonarwhal.com/docs/developer-guide/rules/index.html#howtotestarule
*/
const tests: Array<IRuleTest> = [
    {
        name: 'This test should pass',
        serverConfig: generateHTMLPage()
    },
    {
        name: `This test should fail`,
        reports: [{ message: `This should be your error message` }],
        serverConfig: generateHTMLPage()
    }
];

ruleRunner.testRule(ruleName, tests);
