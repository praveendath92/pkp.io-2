import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { NavbarModule } from './navbar.module';

export function main() {
    describe('Navbar component', () => {

        let config: Route[] = [
            { path: '', component: DummyComponent },
            { path: 'about', component: DummyComponent }
        ];
        let toolbarDOMEl: HTMLElement;
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent, DummyComponent],
                imports: [MaterialModule, NavbarModule,
                    RouterTestingModule.withRoutes(config)]
            })
            .compileComponents();
        }));
        beforeEach(() => {
            toolbarDOMEl = TestBed.createComponent(TestComponent)
                    .debugElement.children[0].nativeElement;
        });

        it('should have HOME as link 1', () => {
            expect(
                toolbarDOMEl.querySelectorAll('a')[0].textContent
            )
            .toContain('HOME');
        });

        it('should have PROFILE as link 2', () => {
            expect(
                toolbarDOMEl.querySelectorAll('a')[1].textContent
            )
            .toContain('PROFILE');
        });

        it('should have BACKGROUND as link 3', () => {
            expect(
                toolbarDOMEl.querySelectorAll('a')[2].textContent
            )
            .toContain('BACKGROUND');
        });

        it('should have BLOG as link 4', () => {
            expect(
                toolbarDOMEl.querySelectorAll('a')[3].textContent
            )
            .toContain('BLOG');
        });
    });
}

@Component({
  selector: 'test-cmp',
  template: '<pkp-navbar></pkp-navbar>'
})
class TestComponent {}

@Component({
  template: ''
})
class DummyComponent {}
