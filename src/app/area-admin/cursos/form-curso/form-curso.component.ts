// src/app/area-admin/cursos/form-curso/form-curso.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { AdminService } from '../../services/admin.service';
import { Categoria } from '../../models/admin.models';

@Component({
  selector: 'app-form-curso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss'],
})
export class FormCursoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  form!: FormGroup;
  categorias: Categoria[] = [];
  modoEdicao = false;
  cursoId = '';
  carregando = true;
  salvando = false;
  erro = '';
  sucesso = '';

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo:                ['', [Validators.required, Validators.minLength(3)]],
      descricao:             ['', [Validators.required, Validators.minLength(10)]],
      categoriaId:           [null],
      imagemUrl:             ['', Validators.required],
      instrutor:             ['', Validators.required],
      certificadoDisponivel: [false],
      vagas:                 ['', Validators.required],
    });

    // Carrega categorias e verifica se é edição
    this.adminService
      .getCategorias()
      .pipe(takeUntil(this.destroy$))
      .subscribe(cats => {
        this.categorias = cats;
      });

    this.cursoId = this.route.snapshot.paramMap.get('id') ?? '';
    this.modoEdicao = !!this.cursoId;

    if (this.modoEdicao) {
      this.adminService
        .getCurso(this.cursoId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: curso => {
            this.form.patchValue({
              titulo:                curso.titulo,
              descricao:             curso.descricao,
              categoriaId:           curso.categoriaId ?? null,
              imagemUrl:             curso.imagemUrl,
              instrutor:             curso.instrutor,
              certificadoDisponivel: curso.certificadoDisponivel,
              vagas:                 curso.vagas,
            });
            this.carregando = false;
          },
          error: () => {
            this.erro = 'Erro ao carregar curso para edição.';
            this.carregando = false;
          },
        });
    } else {
      this.carregando = false;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get f() { return this.form.controls; }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.salvando = true;
    this.erro = '';
    this.sucesso = '';
   
    const payload = this.form.value;
    const operacao = this.modoEdicao
      ? this.adminService.atualizarCurso(this.cursoId, payload)
      : this.adminService.criarCurso(payload);

     console.log(payload);

    operacao.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.salvando = false;
        this.router.navigate(['/admin/cursos']);
      },
      error: () => {
        this.erro = 'Erro ao salvar curso. Verifique os dados e tente novamente.';
        this.salvando = false;
      },
    });
  }
}