import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule, MatSortModule, MatTableModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatDialogModule, MatSlideToggleModule, MatMenuModule, MatAutocompleteModule, MatChipsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatCardModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDialogModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatChipsModule
    ],
    exports: [
        MatCardModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatMenuModule
    ]
})
export class MaterialModule {}