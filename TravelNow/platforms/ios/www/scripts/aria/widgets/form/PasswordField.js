/*
 * Aria Templates 1.4.11 - 15 Oct 2013
 *
 * Copyright 2009-2013 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Password widget
 * @class aria.widgets.form.PasswordField
 */
Aria.classDefinition({
    $classpath : 'aria.widgets.form.PasswordField',
    $extends : 'aria.widgets.form.TextInput',
    $dependencies : ['aria.widgets.controllers.TextDataController'],
    /**
     * PasswordField constructor
     * @param {aria.widgets.CfgBeans:PasswordFieldCfg} cfg the widget configuration
     * @param {aria.templates.TemplateCtxt} ctxt template context
     * @param {Number} lineNumber Line number corresponding in the .tpl file where the widget is created
     */
    $constructor : function (cfg, ctxt, lineNumber) {
        var controller = new aria.widgets.controllers.TextDataController();
        this.$TextInput.constructor.call(this, cfg, ctxt, lineNumber, controller);
        this._isPassword = true;
    },
    $prototype : {}
});