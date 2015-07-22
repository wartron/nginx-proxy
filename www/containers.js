
/*
 * This file is an example of how the containers.js file should look.
 * It will be overwritten by docker-gen
 */

var dockergenRan = false,
    cadvisor = true,
    cadvisorPort = 8080,
    dockerUI = true,
    dockerUIPort = 9000,
    containers = [
        {
            'id':'35f9e80a5b858ec4cb99f63299fca1c8a9938825ced2e876311b161f70fc1f61',
            'name':'js-yii-basic',
            'image':'wartron/web_p_debug',
            'host':'yii-basic.dev',
        },
        {
            'id':'e87742477cf885d2cd347462cf30da9d6596aae913ccb60fd6e6541e2ca50146',
            'name':'js-yii-advanced',
            'image':'wartron/web_p_debug',
            'host':'yii-advanced.dev',
        }
    ];