(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.collapseWhiteSpace = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
 * Constants.
 */

var WHITE_SPACE_COLLAPSABLE = /\s+/g;
var SPACE = ' ';

/**
 * Replace multiple white-space characters with a single space.
 *
 * @example
 *   collapse(' \t\nbar \nbaz\t'); // ' bar baz '
 *
 * @param {string} value - Value with uncollapsed white-space,
 *   coerced to string.
 * @return {string} - Value with collapsed white-space.
 */
function collapse(value) {
    return String(value).replace(WHITE_SPACE_COLLAPSABLE, SPACE);
}

/*
 * Expose.
 */

module.exports = collapse;

},{}]},{},[1])(1)
});